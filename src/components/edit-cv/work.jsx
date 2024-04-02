import { ChevronUpIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import WorkForm from './workForm';
import EditWork from './editWork';

export default function Work(props) {
  // console.log(props)
  const [clickArrow, setClickArrow] = useState(false);
  const [showEditWork, setShowEditWork] = useState(false);
  const [showDelButton, setShowDelButton] = useState(false)

  let rotateArrow = clickArrow
    ? 'mr-6 w-5 rotate-0 transform pt-6 duration-300 ease-in-out'
    : 'mr-6 w-5 rotate-180 transform pb-6 duration-300 ease-in-out';
  return (
    <>
      <div className={`${clickArrow ? 'rounded-t-lg' : 'rounded-lg'} bg-white`}>
        <button
          onClick={() => setClickArrow(!clickArrow)}
          className="flex w-full cursor-pointer justify-between font-bold text-gray-900"
        >
          <div className="flex gap-2">
            <BriefcaseIcon className="ml-6 w-7" />
            <h2 className="py-4 text-2xl">Work Experience</h2>
          </div>
          <ChevronUpIcon className={rotateArrow} />
        </button>
      </div>

      {clickArrow ? (
        <div>
          {!showEditWork ? (
            <WorkForm
              workState={props.workState}
              setWorkState={props.setWorkState}
              workArray={props.workArray}
              setWorkArray={props.setWorkArray}
              createWorkId={props.createWorkId}
              showEditWork={showEditWork}
              setShowEditWork={setShowEditWork}
              showDelButton={showDelButton}
              setShowDelButton={setShowDelButton}
             
            />
          ) : (
            <EditWork
              workState={props.workState}
              setWorkState={props.setWorkState}
              workArray={props.workArray}
              setWorkArray={props.setWorkArray}
              showEditWork={showEditWork}
              setShowEditWork={setShowEditWork}
              showDelButton={showDelButton}
              setShowDelButton={setShowDelButton}
            />
          )}
        </div>
      ) : null}
    </>
  );
}
