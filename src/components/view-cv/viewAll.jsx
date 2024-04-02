import ContactInfo from './viewContactInfo';
import ViewWork from './viewWork';
import ViewEducation from './viewEducation';

export default function ViewAll({ contactInfo, educationArray, workArray }) {
  return (
    <div className="h-[29.7cm] w-[21cm] bg-white shadow-lg">
      <ContactInfo contactInfo={contactInfo} />
      <ViewEducation educationArray={educationArray} />
      <ViewWork workArray={workArray} />
    </div>
  );
}
