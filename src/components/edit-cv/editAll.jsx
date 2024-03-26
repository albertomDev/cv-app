import EditContactInfo from './editContactInfo';
import SubmitEduInfo from './submitEduInfo';

export default function EditAll(props) {
  return (
    <div className="w-[505px]">
      <EditContactInfo
        contactInfo={props.contactInfo}
        onChangeContactInfo={props.onChangeContactInfo}
      />
      <SubmitEduInfo
        educationInfoState={props.educationInfoState}
        onSubmitEducationInfo={props.onSubmitEducationInfo}
        onChangeEducationInfo={props.onChangeEducationInfo}
        showSubmittedEdu={props.showSubmittedEdu}
        educationInfoArr={props.educationInfoArr}
        addEdu={props.addEdu}
      />
    </div>
  );
}
