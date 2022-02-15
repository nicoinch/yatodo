import React, { FC, FormEvent, ReactComponentElement, useState } from 'react';
import { useInsertProjectsMutation } from './../generated';
import Page from '../components/pages/Page';
import InputField from '../components/inputs/InputField';
import Button from '../components/buttons/Button';

interface CreateProjectProps {
  dark?: boolean;
}

const generateColor = () =>
  ['blue', 'teal', 'indigo', 'purple', 'cerise', 'coral', 'ochre', 'gold', 'lime'][
    Math.floor(Math.random() * 9)
  ];

const CreateProject: FC<CreateProjectProps> = (props) => {
  const [, insertProjects] = useInsertProjectsMutation();
  const [projectName, setProjectName] = useState('');
  const [projectColor, setProjectColor] = useState('teal');
  const [errorMessage, setErrorMessage] = useState('');
  const [creationErrorMessage, setCreationErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleNameChange = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) {
      setErrorMessage('');
    } else {
      setErrorMessage('Project name is required');
    }
    setProjectColor(generateColor());
    setProjectName(event.currentTarget.value);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (projectName && projectName.length > 0) {
      try {
        setButtonDisabled(true);
        await insertProjects({ name: projectName, color: projectColor });
        setProjectName('');
        setProjectColor('');
        setButtonDisabled(false);
        window.history.back();
      } catch (error) {
        setCreationErrorMessage('Could not create project');
      }
    } else {
      setErrorMessage('Project name is required');
    }
  };

  const header: ReactComponentElement<any> = (
    <span>
      Create a <strong>project</strong> and add <strong>tasks</strong>
    </span>
  );
  const pageContent: ReactComponentElement<any> = (
    <form className={'flex flex-col gap-4 w-full sm:w-1/2 m-auto'} onSubmit={handleSubmit}>
      <div className={'flex flex-col gap-2'}>
        <InputField
          color={projectColor}
          label={'Name your project'}
          value={projectName}
          onChange={handleNameChange}
          dark={props.dark}
        />
        <div className={`text-sm h-4 ${props.dark ? 'text-red-400' : 'text-red-600'}`}>
          {errorMessage}
        </div>
      </div>
      <Button
        color={projectColor}
        label={'Create project'}
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

CreateProject.defaultProps = {
  dark: false,
};

export default CreateProject;
