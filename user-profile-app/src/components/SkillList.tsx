import type {Skill, SkillLevel } from '../types';

interface SkillListProps {
    skills: Skill[];
}

const getLevelColor = (level: SkillLevel): string => {
    switch (level) {
        case 'Beginner':    return '#f39c12';
        case 'Intermediate': return '#3498db';
        case 'Expert':      return '#2ecc71';
        default:            return '#95a5a6';   
    }
};

export const SkillList = ({ skills }: SkillListProps) => {
    return (
        <div>
            <h3>Skills</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.map((skill) => (
                    <li
                        key={skill.id}
                        style={{
                            margin: '8px 0',
                            padding: '8px',
                            borderRadius: '6px',
                            background: 'rgba(216, 191, 157, 0.71)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <span>{skill.name}</span>
                        <span
                            style={{
                                background: getLevelColor(skill.level),
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: '12px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                            }}
                        >
                            {skill.level}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};