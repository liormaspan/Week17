import DataTwo from "./DataTwo.json"

const Example3 = (props) => {
  const experiences = DataTwo.Experiences;
  return (
    <div>
      <h2>Experiences:</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <img src={experience.logo} />
          <h3>{experience.companyName}</h3>
          <a href={experience.url} />
          {experience.roles.map((role, idx) => (
            <div key={idx}>
              <h4>Role: {role.title}</h4>
              <p>
                {role.startDate}, {role.endDate},{role.location}
              </p>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Example3;