import "./PoseDetails.scss";

const PoseDetails = ({ pose }) => {
  const {
    id,
    english_name,
    sanskrit_name,
    sanskrit_name_adapted,
    image,
    pose_description,
    pose_benefits,
    instructions,
  } = pose;

  console.log("Image path:", image);
  return (
    <>
      <h1 className="pose-details__header">{english_name}</h1>
      <h4>
        {sanskrit_name_adapted} | {sanskrit_name}
      </h4>
      <img className="pose-details__img" src={`/${image}`} alt="yoga pose" />
    </>
  );
};

export default PoseDetails;
