import { PencilSquareIcon } from '@heroicons/react/24/solid';

export default function SubmittedEduInfo(props) {
  console.log(props.educationInfoArr);
  console.log(props.addEdu);

  return (
    <>
      <div className="mt-1 grid gap-1">
        {props.educationInfoArr.map(eachEdu => {
          return (
            <button
              className="flex w-full cursor-pointer justify-between bg-white text-gray-600 hover:text-gray-900"
              data-id={eachEdu.id}
              key={eachEdu.id}
            >
              <p className="px-6 py-4 text-lg font-semibold">
                {eachEdu.school}
              </p>
              <PencilSquareIcon className="mr-6 w-6 py-4" />
            </button>
          );
        })}
        <div
          onClick={props.addEdu}
          className="flex justify-center rounded-b-lg bg-white py-4"
        >
          <button className="cursor-pointer rounded-3xl border-2 px-4 py-1 font-semibold">
            Education +
          </button>
        </div>
      </div>
    </>
  );
}
