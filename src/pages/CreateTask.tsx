import React, { FC, FormEvent, ReactComponentElement, useState } from 'react';
import { useInsertTasksMutation, useProjectDetailsSubscription } from './../generated';
import Page from '../components/pages/Page';
import InputField from '../components/inputs/InputField';
import Button from '../components/buttons/Button';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader/Loader';

interface CreateTaskProps {
  dark?: boolean;
}

const CreateTask: FC<CreateTaskProps> = (props) => {
  const params = useParams();
  const [, insertTasks] = useInsertTasksMutation();
  const [taskContent, setTaskContent] = useState('');
  const [taskLongDescription, setTaskLongDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [creationErrorMessage, setCreationErrorMessage] = useState('');
  const [projectColor, setProjectColor] = useState('teal');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  let header: ReactComponentElement<any>;
  let pageContent: ReactComponentElement<any> = <span />;

  if (!params.projectId || isNaN(parseInt(params.projectId))) {
    header = <span>An invalid project ID was provided, no task can be created</span>;
    pageContent = <div />;
  } else {
    const projectId = parseInt(params.projectId);

    const [result] = useProjectDetailsSubscription({
      variables: {
        projectId,
      },
    });

    if (!result.data) {
      header = <span>Loading data...</span>;
      pageContent = (
        <div className={'flex w-full h-full h-64 items-center justify-center'}>
          <Loader dark={props.dark} />
        </div>
      );
    } else {
      const project = result.data.projects[0];
      setTimeout(() => {
        setProjectColor(project.color);
      });
      const handleContentChange = (event: FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value) {
          setErrorMessage('');
        } else {
          setErrorMessage('Task content is required');
        }
        setTaskContent(event.currentTarget.value);
      };
      const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (taskContent && taskContent.length > 0) {
          try {
            setButtonDisabled(true);
            await insertTasks({
              content: taskContent,
              longDescription: taskLongDescription,
              projectId: projectId,
            });
            setButtonDisabled(false);
            setTaskContent('');
            setTaskLongDescription('');
            window.history.back();
          } catch (error) {
            setCreationErrorMessage('Could not create task');
          }
        } else {
          setErrorMessage('Task content is required');
        }
      };

      header = (
        <span>
          Create a <strong>task</strong>
        </span>
      );
      pageContent = (
        <form className={'flex flex-col gap-4 w-full sm:w-1/2 m-auto'} onSubmit={handleSubmit}>
          <div className={'flex flex-col gap-2'}>
            <InputField
              color={project.color}
              label={'Name your task'}
              value={taskContent}
              onChange={handleContentChange}
              dark={props.dark}
            />
            <div className={`text-sm h-4 ${props.dark ? 'text-red-400' : 'text-red-600'}`}>
              {errorMessage}
            </div>
            <InputField
              color={projectColor}
              label={'Describe your task'}
              value={taskLongDescription}
              onChange={(event) => setTaskLongDescription(event.currentTarget.value)}
              dark={props.dark}
            />
            <div className={`text-sm h-4 ${props.dark ? 'text-red-400' : 'text-red-600'}`} />
          </div>
          <Button
            color={projectColor}
            label={'Create task'}
            type="submit"
            value="Submit"
            disabled={buttonDisabled}
            dark={props.dark}
          />
          <div className={`text-base h-4 ${props.dark ? 'text-red-400' : 'text-red-600'}`}>
            {creationErrorMessage}
          </div>
        </form>
      );
    }
  }

  return (
    <div className={'flex flex-col flex-grow w-full absolute inset-0 z-20'}>
      <Page
        color={projectColor}
        header={header}
        className={'flex-grow self-center'}
        content={pageContent}
        dark={props.dark}
      />
    </div>
  );
};

CreateTask.defaultProps = {
  dark: false,
};

export default CreateTask;
