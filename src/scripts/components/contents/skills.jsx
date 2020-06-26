import React from 'react'
import skillsData from '../../resources/skillsData.json';
function Skills() {
    const maxValue = skillsData.maxValue
    var skillGroupTags = []
    skillsData.skillGroups.forEach((skillGroup, index) => {
        var skillTags = []
        skillGroup.skills.forEach((skill, index) => {
            var barWidth = (100 * skill.value / maxValue).toString() + '%'
            console.log(barWidth)
            var barStyle = {width: barWidth}
            skillTags.push(
                <div className="skills__skill" key={index}>
                    <div className="skills__name">{skill.name}</div>
                    <div className="skills__skill-bar-background">
                        <div className="skills__skill-bar" style={barStyle}/>
                        {/* <div className="skills__skill-bar" style={{width: "50%"}}/> */}
                    </div>
                </div>
            )
        });
        skillGroupTags.push(
            <div key={index}>
                <div className="skills__tag">{skillGroup.tag}</div>
                <div className="skills__skills-wrapper">
                    {skillTags}
                </div>
            </div>
        )
    });
    return (
        <div>
            <h2>Skills</h2>
            {skillGroupTags}
        </div>
    )
}

export default Skills
