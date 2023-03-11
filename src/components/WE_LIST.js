import { useListContext } from "../context/listContext";

export default function WE_list() {
    const [stateList] = useListContext();
    const nodes = stateList.jobs.map((job) => <h2 key={job.id}>{job.text}</h2>)
    
    return (
        <>
            {nodes}
        </>
    )
}