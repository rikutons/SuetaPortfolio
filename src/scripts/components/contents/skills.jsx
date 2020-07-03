import React from 'react'
import skillsData from '../../resources/skillsData.json';
function Skills() {
    const maxValue = skillsData.maxValue
    var skillGroupTags = []
    skillsData.skillGroups.forEach((skillGroup, index) => {
        var skillTags = []
        skillGroup.skills.forEach((skill, index) => {
            var barWidth = (100 * skill.value / maxValue).toString() + '%'
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
            <div className="skills__skills-wrapper" key={index}>
                <div className="skills__tag"><span className="skills__tag-text">{skillGroup.tag}</span></div>
                <div>
                    {skillTags}
                </div>
            </div>
        )
    });
    return (
        <div>
            <h2>Skills</h2>
            <p>
                開発できる言語やライブラリ・ソフトウェアの表です。未経験をバーが空の状態とし、開発に使える機能の理解度に応じてバーの中身を増やしています。
            </p>
            <div className="skills__all-skills-wrapper">
                {skillGroupTags}
            </div>
        </div>
    )
}

export default Skills
