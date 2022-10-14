import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/project';
import { DELETE_PROJECT } from '../mutations/project';

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteProject}>
        <FaTrash className='icon' /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
