import './index.css';
import ViewAll from './components/view-cv/viewAll';
import EditAll from './components/edit-cv/editAll';
import { useState } from 'react';

function App() {
  function uid() {
    return (
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(12, 0)
    );
  }

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [educationInfo, setEducationInfo] = useState({
    id: uid(),
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const [educationInfoArr, setEducationInfoArr] = useState([]);

  const [showSubmittedEdu, setShowSubmittedEdu] = useState(true);

  const [editEducation, setEditEducation] = useState(true);

  function resetEducationInfoState() {
    setEducationInfo(prevInfo => {
      return {
        ...prevInfo,
        id: uid(),
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
      };
    });
  }

  function handleContactInfoChange(event) {
    const { name, value } = event.target;
    setContactInfo(prevInfo => {
      return { ...prevInfo, [name]: value };
    });
  }

  function handleEducationInfoChange(event) {
    const { name, value } = event.target;
    setEducationInfo(prevInfo => {
      return { ...prevInfo, [name]: value };
    });
  }

  function addEduButton() {
    setShowSubmittedEdu(!showSubmittedEdu);
    resetEducationInfoState();
  }

  function handleEducationInfoForm(event) {
    event.preventDefault();

    setEducationInfoArr(prevInfo => [...prevInfo, educationInfo]);
    addEduButton();
  }

  function handleEducationEditButton(event) {
    const newEdit = educationInfoArr.filter(
      eachEdu => eachEdu.id === event.currentTarget.dataset.id,
    );
    setEducationInfo(newEdit[0]);
    setEditEducation(!educationInfo);
  }

  function handleEducationEditForm(event) {
    event.preventDefault();
    console.log(educationInfo);

    const editedArray = educationInfoArr.map(each => {
      if (each.id == educationInfo.id) {
        return { ...each, ...educationInfo };
      }
      return each;
    });
    console.log(editedArray);
    setEducationInfoArr(editedArray);
    setEditEducation(!editEducation);
    resetEducationInfoState();
  }

  return (
    <div className="flex justify-center gap-8 bg-gray-100 px-8 pt-8">
      <EditAll
        contactInfo={contactInfo}
        onChangeContactInfo={handleContactInfoChange}
        educationInfoArr={educationInfoArr}
        educationInfoState={educationInfo}
        onChangeEducationInfo={handleEducationInfoChange}
        onSubmitEducationInfo={handleEducationInfoForm}
        showSubmittedEdu={showSubmittedEdu}
        addEdu={addEduButton}
        onClickEditEducation={handleEducationEditButton}
        editEducation={editEducation}
        onSubmitEditedForm={handleEducationEditForm}
      />
      <ViewAll contactInfo={contactInfo} educationInfoArr={educationInfoArr} />
    </div>
  );
}

export default App;
