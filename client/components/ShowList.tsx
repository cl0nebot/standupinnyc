import {Show} from "../../server/src/generated/prisma"
import ShowListItem from "./ShowListItem"

interface ShowListProps {
  shows: Show[];
}

function ShowList(props: ShowListProps) {
  const {shows} = props;
  return (<div className="showList">
     {shows.map(show => (<ShowListItem key={show.id} show={show} />))}
  </div>)
}


export default ShowList
