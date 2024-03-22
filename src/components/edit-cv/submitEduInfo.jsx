import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function SubmitEduInfo(props) {
  const { school, degree, startDate, endDate, location } =
    props.educationInfoState;

  return (
    <div className="mb-4 rounded-lg bg-white px-6 py-4">
      <div className=" mb-4 flex items-center gap-2">
        <AcademicCapIcon className="w-7" />
        <h2 className="align-middle text-2xl font-bold text-gray-900">
          Education
        </h2>
      </div>

      <form onSubmit={props.onSubmitEducationInfo}>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-900"
            htmlFor="school"
          >
            School
          </label>
          <input
            className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
            id="school"
            name="school"
            onChange={props.onChangeEducationInfo}
            type="text"
            placeholder="Enter school / university"
            value={school}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-900"
            htmlFor="degree"
          >
            Degree
          </label>
          <input
            className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
            id="degree"
            name="degree"
            value={degree}
            onChange={props.onChangeEducationInfo}
            type="text"
            placeholder="Enter degree / field of study"
            required
          />
        </div>

        <div className="flex justify-between gap-2">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-900"
              htmlFor="startDate"
            >
              Start date
            </label>
            <input
              className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={props.onChangeEducationInfo}
              type="text"
              placeholder="Enter start date"
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-900"
              htmlFor="endDate"
            >
              End date
            </label>
            <input
              className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
              id="endDate"
              name="endDate"
              onChange={props.onChangeEducationInfo}
              type="text"
              placeholder="Enter end date"
              value={endDate}
            />
          </div>
        </div>

        <div className="mb-8">
          <label
            className="mb-2 block text-sm font-bold text-gray-900"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
            id="location"
            name="location"
            value={location}
            onChange={props.onChangeEducationInfo}
            type="text"
            placeholder="Enter location"
          />
        </div>

        <div className="mb-4 flex justify-between">
          <button
            type="button"
            className="rounded-md border-2 border-gray-500 px-3 py-1 text-gray-600"
          >
            Delete
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-md border-2 border-gray-500 px-3 py-1 text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border-2 border-gray-600 bg-gray-600 px-3 py-1 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
