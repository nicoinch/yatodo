import { FormEvent, useState } from 'react';
import { useAllProjectsSubscription, useInsertProjectsMutation } from './../../generated';

export const ProjectsList = () => {
  const [result] = useAllProjectsSubscription();
  const [, insertProjects] = useInsertProjectsMutation();
  const [projectName, setProjectName] = useState('');
  const [projectColor, setProjectColor] = useState('');

  const handleSubmit = (event: FormEvent) => {
    insertProjects({ name: projectName, color: projectColor });
    setProjectName('');
    setProjectColor('');
    event.preventDefault();
  };

  if (!result.data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <ul>
        {result.data.projects.map((project) => (
          <p key={project.id}>{project.name}</p>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={projectName}
            onChange={(event) => setProjectName(event.currentTarget.value)}
          />
        </div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={projectColor}
          onChange={(event) => setProjectColor(event.currentTarget.value)}
        >
          <option value="coral">Coral</option>
          <option value="aquamarine">Aquamarine</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <button
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create project
        </button>
      </form>
    </div>
  );
};
