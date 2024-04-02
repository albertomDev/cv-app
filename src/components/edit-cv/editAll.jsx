import EditContactInfo from './editContactInfo';
import Work from './work';
import Education from './education';

export default function EditAll(props) {
  // console.log(props)
  return (
    <div className="w-[505px]">
      <EditContactInfo
        contactInfo={props.contactInfo}
        onChangeContactInfo={props.onChangeContactInfo}
      />
      <Education
        educationState={props.educationState}
        setEducationState={props.setEducationState}
        educationArray={props.educationArray}
        setEducationArray={props.setEducationArray}
        createWorkId={props.createWorkId}
      />
      <Work
        workState={props.workState}
        setWorkState={props.setWorkState}
        workArray={props.workArray}
        setWorkArray={props.setWorkArray}
        createWorkId={props.createWorkId}
      />
    </div>
  );
}
