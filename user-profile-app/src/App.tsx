import { UserCard } from './components/UserCard';
import { SkillList } from './components/SkillList';
import type { User, Skill } from './types';


function App() {
  const user: User = {
    name: "Zhasmin",
    email: "zhasmin@gmail.com",
    age: 21
  };

  const skills: Skill[] = [
    { id: 1, name: 'TypeScript', level: 'Intermediate' },
    { id: 2, name: 'React', level: 'Expert' },
    { id: 3, name: 'UI/UX Design', level: 'Beginner' },
    { id: 4, name: 'English', level: 'Intermediate' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding:'20px' }}>
      <h1>User Profile </h1>
        
        <UserCard user={user} isActive={true}>
          <p>
            <strong>Bio:</strong> Passionate frontend developer learning TypeScript 
            and modern React patterns.
          </p>
        </UserCard>

        <UserCard user={user} isActive={false}>
          <p style={{ color: '#e74c3c'}}>
            <strong>Status:</strong> Currently offline
          </p>
        </UserCard>

        <SkillList skills={skills} />
      </div>
  );
}

export default App
