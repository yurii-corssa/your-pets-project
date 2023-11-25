import {
  Card,
  DataWrapper,
  Image,
  Text,
  TextTitle,
  Thumb,
} from './PetsItem.styled';

const PetsItem = ({ pet }) => {
  const { name, birthday, type, comments, photoURL } = pet;
  return (
    <Card>
      <Thumb>
        <Image
          src={photoURL}
          alt={type}
          width="10.0625rem"
          height="10.0625rem"
          loading="lazy"
        />
      </Thumb>
      <DataWrapper>
        <Text>
          <TextTitle>Name: </TextTitle>
          {name}
        </Text>
        <Text>
          <TextTitle>Date of birth: </TextTitle>
          {birthday}
        </Text>
        <Text>
          <TextTitle>Type: </TextTitle>
          {type}
        </Text>
        <Text>
          <TextTitle>Comments: </TextTitle>
          {comments}
        </Text>
      </DataWrapper>
    </Card>
  );
};

export default PetsItem;