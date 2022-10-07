import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { ListStyled, ListItem, ItemName, ItemPicture, Info, ItemDescription, ItemValue, EmptyList } from "./List.style";

interface ListProps {
    teachers: Teacher[],
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <ListStyled>
                    {props.teachers.map(teacher => (
                        <ListItem key={teacher.id}>
                            <ItemPicture src={teacher.picture}></ItemPicture>
                            <Info>
                                <ItemName>{teacher.name}</ItemName>
                                <ItemValue>R$ {teacher.hr_wage}/hora</ItemValue>
                                <ItemDescription>{teacher.description}</ItemDescription>
                                <Button sx={{ width: '70%' }}>Schedule Class</Button>
                            </Info>
                        </ListItem>
                    ))}
                </ListStyled >
            ) : (
                <EmptyList>Teachers not found</EmptyList>
            )};
        </div>
    )
}

export default List;