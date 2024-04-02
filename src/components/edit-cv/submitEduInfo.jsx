import { AcademicCapIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import SubmittedEduInfo from './submittedEduInfo';
import EduForm from './eduForm';
import { useState } from 'react';

export default function SubmitEduInfo(props) {
  const [displayEdu, setDisplayEdu] = useState(false);

  let rotateArrow = displayEdu
    ? 'mr-6 w-5 rotate-0 transform pt-6 duration-300 ease-in-out'
    : 'mr-6 w-5 rotate-180 transform pb-6 duration-300 ease-in-out';

  return (
    <>
      <div className={`${displayEdu ? 'rounded-t-lg' : 'mb-4 after:rounded-lg'} bg-white`}>
        <button
          onClick={() => setDisplayEdu(!displayEdu)}
          className="flex w-full cursor-pointer justify-between font-bold text-gray-900"
        >
          <div className="flex gap-2">
            <AcademicCapIcon className="ml-6 w-7" />
            <h2 className="py-4 text-2xl">Education</h2>
          </div>
          <ChevronUpIcon className={rotateArrow} />
        </button>
      </div>

      {displayEdu ? (
        <div>
          {props.showSubmittedEdu ? (
            <EduForm allInfo={props} />
          ) : (
            <SubmittedEduInfo
              educationInfoState={props.educationInfoState}
              educationInfoArr={props.educationInfoArr}
              addEdu={props.addEdu}
              onChangeEducationInfo={props.onChangeEducationInfo}
              onClickEditEducation={props.onClickEditEducation}
              editEducation={props.editEducation}
              onSubmitEditedForm={props.onSubmitEditedForm}
            />
          )}
        </div>
      ) : null}
    </>
  );
}
