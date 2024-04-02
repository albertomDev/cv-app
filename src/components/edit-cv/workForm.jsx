export default function WorkForm(props) {
  // console.log(props);

  function handleWorkStateChange(event) {
    const { name, value } = event.target;
    props.setWorkState(prevInfo => {
      return { ...prevInfo, [name]: value };
    });
  }

  function resetWorkState() {
    props.setWorkState(prevInfo => {
      return {
        ...prevInfo,
        id: props.createWorkId(),
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      };
    });
  }

  function editWorkArray() {
    const editedArray = props.workArray.map(work => {
      if (work.id == props.workState.id) {
        return { ...work, ...props.workState };
      }
      return work;
    });
    props.setWorkArray(editedArray);
  }

  function showDeleteButton() {
    props.setShowEditWork(!props.editWork);
    resetWorkState();
  }

  function deleteWork() {
    const deleted = props.workArray.filter(work => {
      return work.id !== props.workState.id;
    });
    props.setWorkArray(deleted);
	showDeleteButton()
  }

  function handleWorkForm(event) {
    event.preventDefault();
    console.log(event);
    const checkId = props.workArray.find(
      work => work.id === props.workState.id,
    );
    if (checkId) {
      editWorkArray();
    } else {
      props.setWorkArray(prevInfo => [...prevInfo, props.workState]);
    }
    props.setShowEditWork(!props.editWork);
    resetWorkState();
  }

  return (
    <form
      className="mb-4 rounded-b-lg bg-white px-6 py-4"
      onSubmit={handleWorkForm}
    >
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="school"
        >
          Company
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="company"
          name="company"
          onChange={handleWorkStateChange}
          type="text"
          placeholder="Enter computer name"
          value={props.workState.company}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="school"
        >
          Position title
        </label>
        <input
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="title"
          name="title"
          onChange={handleWorkStateChange}
          type="text"
          placeholder="Enter position title"
          value={props.workState.title}
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
            value={props.workState.startDate}
            onChange={handleWorkStateChange}
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
            onChange={handleWorkStateChange}
            type="text"
            placeholder="Enter end date"
            value={props.workState.endDate}
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
          onChange={handleWorkStateChange}
          type="text"
          placeholder="Enter location"
          value={props.workState.location}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-900"
          htmlFor="school"
        >
          Description
        </label>
        <textarea
          className="w-full rounded-xl bg-gray-100 px-3 py-2 leading-tight text-gray-900 outline-none"
          id="description"
          name="description"
          onChange={handleWorkStateChange}
          type="text"
          placeholder="Enter position title"
          value={props.workState.description}
          required
        />
      </div>

      <div className="mb-4">
        {props.showDelButton ? (
          <div className="flex justify-between">
            <button
              onClick={deleteWork}
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
