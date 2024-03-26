export default function ViewEducation(props) {
  console.log(props.educationInfoArr);
  props.educationInfoArr.forEach(prop => console.log(prop));

  if (props.educationInfoArr.length > 0) {
    return (
      <>
        <div className="my-10 px-14">
          <h2 className="bg-gray-100 text-xl py-1 text-center font-semibold text-black">
            Education
          </h2>
        </div>

        {props.educationInfoArr.map(eachEdu => {
          return (
            <div className="flex mb-4 px-14 gap-5" key={eachEdu.id}>
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
