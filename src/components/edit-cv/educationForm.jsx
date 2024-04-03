export default function EducationForm(props) {
  // console.log(props);

  function handleEducationChange(event) {
    const { name, value } = event.target;
    props.setEducationState(prevInfo => {
      return { ...prevInfo, [name]: value };
    });
  }

  function resetEducationState() {
    props.setEducationState(prevInfo => {
      return {
        ...prevInfo,
        id: props.createWorkId(),
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
      };
    });
  }

  function editEducationArray() {
    const editedArray = props.educationArray.map(education => {
      if (education.id == props.educationState.id) {
        return { ...education, ...props.educationState };
      }
      return education;
    });
    props.setEducationArray(editedArray);
  }

  function showDeleteButton() {
    props.setShowEducationEdit(!props.showEducationEdit);
    resetEducationState();
  }

  function deleteEducation() {
    const deleted = props.educationArray.filter(education => {
      return education.id !== props.educationState.id;
    });
    props.setEducationArray(deleted);
    showDeleteButton();
  }

  function handleEducationForm(event) {
    event.preventDefault();
    // console.log(event);
    const checkId = props.educationArray.find(
      education => education.id === props.educationState.id,
    );
    if (checkId) {
      editEducationArray();
    } else {
      props.setEducationArray(prevInfo => [...prevInfo, props.educationState]);
    }
    props.setShowEducationEdit(!props.showEducationEdit);
    resetEducationState();
  }

  return (
    <form
      className="mb-4 rounded-b-lg bg-white px-6 py-4"
      onSubmit={handleEducationForm}
    >
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
          onChange={handleEducationChange}
          type="text"
          placeholder="Enter computer name"
          value={props.educationState.school}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="school"
        >
          Degree
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="degree"
          name="degree"
          onChange={handleEducationChange}
          type="text"
          placeholder="Enter position title"
          value={props.educationState.degree}
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
            value={props.educationState.startDate}
            onChange={handleEducationChange}
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
            onChange={handleEducationChange}
            type="text"
            placeholder="Enter end date"
            value={props.educationState.endDate}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="school"
        >
          Location
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="location"
          name="location"
          onChange={handleEducationChange}
          type="text"
          placeholder="Enter location"
          value={props.educationState.location}
          required
        />
      </div>

      <div className="mb-4">
        {props.showDelButton ? (
          <div className="flex justify-between">
            <button
              onClick={deleteEducation}
              type="button"
              className="rounded-md border-2 border-gray-500 px-3 py-1 text-gray-600"
            >
              Delete
            </button>

            <div className="flex gap-2">
              <button
                onClick={showDeleteButton}
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
        ) : (
          <div className="flex gap-2">
            <button
              onClick={showDeleteButton}
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
        )}
      </div>
    </form>
  );
}
