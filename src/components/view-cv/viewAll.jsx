import ContactInfo from './viewContactInfo';
import ViewEducation from './viewEducation';
import ViewWork from './viewWork';

export default function ViewAll({ contactInfo, educationInfoArr, workArray }) {
  return (
    <div className="h-[29.7cm] w-[21cm] bg-white shadow-lg">
      <ContactInfo contactInfo={contactInfo} />
      <ViewEducation educationInfoArr={educationInfoArr} />
      <ViewWork workArray={workArray} />
    </div>
  );
}
