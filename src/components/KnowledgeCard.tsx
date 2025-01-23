import { knowledges } from "../data/data"

type KnowledgeCardProps = {
    type: "language" | "tool"
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ type }) => {

    return (
        <>
            {knowledges
                .filter(knowledge => knowledge.type === type)
                .map(knowledge => {

                    return (
                        <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                            <img src={knowledge.icon} alt="" className="max-h-[5vh] max-w-[50%]"/>
                            <p>{knowledge.name}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default KnowledgeCard;