import EditContactInfo from './editContactInfo';
import SubmitEduInfo from './submitEduInfo';
import Work from './work';

export default function EditAll(props) {
  // console.log(props)
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
        onClickEditEducation={props.onClickEditEducation}
        editEducation={props.editEducation}
        onSubmitEditedForm={props.onSubmitEditedForm}
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
