export default function ViewEducation(props) {
  if (props.educationInfoArr.length > 0) {
    return (
      <>
        <div className="my-10 px-14">
          <h2 className="bg-gray-100 py-1 text-center text-xl font-semibold text-black">
            Education
          </h2>
        </div>

        {props.educationInfoArr.map(eachEdu => {
          return (
            <div className="mb-4 flex gap-5 px-14" key={eachEdu.id}>
              <div className="w-36">
                <p>
                  {eachEdu.startDate} - {eachEdu.endDate}
                </p>
                <p>{eachEdu.location}</p>
              </div>
              <div>
                <p className="font-semibold">{eachEdu.school}</p>
                <p>{eachEdu.degree}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
