import TeamMemberCard from './TeamMemberCard'

import teamMembers from '../../../contants/teamMembers'

import styles from './TeamList.module.css'

const TeamList = () => {
    return (
        <ul className={styles.teamList}>
            {teamMembers.map((member) => (
                <TeamMemberCard
                    name={member.name}
                    position={member.position}
                    description={member.description}
                    email={member.email}
                    phone={member.phone}
                    photo={member.photo}
                    key={member.name}
                />
            ))}
        </ul>
    )
}

export default TeamList
