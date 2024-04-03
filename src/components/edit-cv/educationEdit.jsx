import { PencilSquareIcon } from '@heroicons/react/24/solid';

export default function EducationEdit(props) {
  // console.log(props);
  function handleEditClick(event) {
    const newEdit = props.educationArray.filter(
      education => education.id === event.currentTarget.dataset.id,
    );
    props.setEducationState(newEdit[0]);
    props.setShowEducationEdit(!props.showEducationEdit);
    props.setShowDelButton(!props.ShowDelButton);
  }

  function handleAddButton() {
    props.setShowEducationEdit(!props.showEducationEdit);
    props.setShowDelButton(false);
  }

  return (
    <div className="mb-4 mt-1 grid gap-1">
      {props.educationArray.map(education => {
        return (
          <button
            onClick={handleEditClick}
            className="flex w-full cursor-pointer justify-between bg-white text-gray-600 hover:text-gray-900"
            data-id={education.id}
            key={education.id}
          >
            <p className="px-6 py-4 text-lg font-semibold">
              {education.school}
            </p>
            <PencilSquareIcon className="mr-6 w-6 py-4" />
          </button>
        );
      })}
      <div className="flex justify-center rounded-b-lg bg-white py-4">
        <button
          onClick={handleAddButton}
          className="cursor-pointer rounded-3xl border-2 px-4 py-1 font-semibold"
        >
          Education +
        </button>
      </div>
    </div>
  );
}
