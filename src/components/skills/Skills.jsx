import React from 'react';
import './skills.css';
import SkillCategory from './SkillCategory';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "C#", icon: "devicon-csharp-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "Java", icon: "devicon-java-plain" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "Nest.js", icon: "devicon-nestjs-plain" },
        { name: "ASP.NET", icon: "devicon-dotnetcore-plain" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Angular", icon: "devicon-angularjs-plain" },
        { name: "Next.js", icon: "devicon-nextjs-original-wordmark" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Postman", icon: "devicon-postman-plain" }
      ]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>

      <div className="skills__container container">
        <div className="skills__categories">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;