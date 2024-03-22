import './index.css';
import ViewAll from './components/view-cv/viewAll';
import EditAll from './components/edit-cv/editAll';
import { useState } from 'react';

function App() {
  function uid () {
    return (
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(12, 0)
    );
  };

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

  function handleEducationInfoForm(event) {
    event.preventDefault();

    setEducationInfoArr(prevInfo => [...prevInfo, educationInfo]);

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

  return (
    <div className="flex justify-center gap-8 bg-gray-100 px-8 pt-8">
      <EditAll
        contactInfo={contactInfo}
        onChangeContactInfo={handleContactInfoChange}
        educationInfo={educationInfoArr}
        educationInfoState={educationInfo}
        onChangeEducationInfo={handleEducationInfoChange}
        onSubmitEducationInfo={handleEducationInfoForm}
      />
      <ViewAll contactInfo={contactInfo} educationInfo={educationInfoArr} />
    </div>
  );
}

export default App;
