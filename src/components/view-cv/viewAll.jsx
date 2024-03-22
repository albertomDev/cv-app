import ContactInfo from './viewContactInfo';
import ViewEducation from './viewEducation';

export default function ViewAll({ contactInfo, educationInfo }) {
  return (
    <div className="h-[29.7cm] w-[21cm] bg-white shadow-lg">
      <ContactInfo contactInfo={contactInfo} />
      <ViewEducation educationInfo={educationInfo} />
    </div>
  );
}
