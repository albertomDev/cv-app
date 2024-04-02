import { ChevronUpIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import EducationForm from './educationForm';
import EducationEdit from './educationEdit';

export default function Education(props) {
  // console.log(props)
  const [clickArrow, setClickArrow] = useState(false);
  const [showEducationEdit, setShowEducationEdit] = useState(false);
  const [showDelButton, setShowDelButton] = useState(false);

  let rotateArrow = clickArrow
    ? 'mr-6 w-5 rotate-0 transform pt-6 duration-300 ease-in-out'
    : 'mr-6 w-5 rotate-180 transform pb-6 duration-300 ease-in-out';
  return (
    <>
      <div
        className={`${clickArrow ? 'rounded-t-lg' : 'mb-4 rounded-lg'} bg-white`}
      >
        <button
          onClick={() => setClickArrow(!clickArrow)}
          className="flex w-full cursor-pointer justify-between font-bold text-gray-900"
        >
          <div className="flex gap-2">
            <AcademicCapIcon className="ml-6 w-7" />
            <h2 className="py-4 text-2xl">Education</h2>
          </div>
          <ChevronUpIcon className={rotateArrow} />
        </button>
      </div>

      {clickArrow ? (
        <div>
          {!showEducationEdit ? (
            <EducationForm
              educationState={props.educationState}
              setEducationState={props.setEducationState}
              educationArray={props.educationArray}
              setEducationArray={props.setEducationArray}
              createWorkId={props.createWorkId}
              showEducationEdit={showEducationEdit}
              setShowEducationEdit={setShowEducationEdit}
              showDelButton={showDelButton}
              setShowDelButton={setShowDelButton}
            />
          ) : (
            <EducationEdit
              educationState={props.educationState}
              setEducationState={props.setEducationState}
              educationArray={props.educationArray}
              setEducationArray={props.setEducationArray}
              showEducationEdit={showEducationEdit}
              setShowEducationEdit={setShowEducationEdit}
              showDelButton={showDelButton}
              setShowDelButton={setShowDelButton}
            />
          )}
        </div>
      ) : null}
    </>
  );
}
