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

  const [educationState, setEducationState] = useState({
    id: uid(),
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const [educationArray, setEducationArray] = useState([]);

  const [workState, setWorkState] = useState({
    id: uid(),
    company: '',
    title: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  const [workArray, setWorkArray] = useState([]);

  function handleContactInfoChange(event) {
    const { name, value } = event.target;
    setContactInfo(prevInfo => {
      return { ...prevInfo, [name]: value };
    });
  }

  return (
    <div className="flex justify-center gap-8 bg-gray-100 px-8 pt-8">
      <EditAll
        contactInfo={contactInfo}
        onChangeContactInfo={handleContactInfoChange}
        educationState={educationState}
        setEducationState={setEducationState}
        educationArray={educationArray}
        setEducationArray={setEducationArray}
        workState={workState}
        setWorkState={setWorkState}
        workArray={workArray}
        setWorkArray={setWorkArray}
        createWorkId={uid}
      />
      <ViewAll
        contactInfo={contactInfo}
        educationArray={educationArray}
        workArray={workArray}
      />
    </div>
  );
}

export default App;
