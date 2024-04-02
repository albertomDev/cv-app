export default function ViewWork(props) {
  if (props.workArray.length > 0) {
    return (
      <>
        <div className="my-10 px-14">
          <h2 className="bg-gray-100 py-1 text-center text-xl font-semibold text-black">
            Work Experience
          </h2>
        </div>

        {props.workArray.map(work => {
          return (
            <div className="mb-4 flex gap-5 px-14" key={work.id}>
              <div className="w-36">
                <p>
                  {work.startDate} - {work.endDate}
                </p>
                <p>{work.location}</p>
              </div>
              <div className="w-full">
                <p className="font-semibold">{work.company}</p>
                <p>{work.description}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
