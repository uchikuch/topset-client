import { useQuery, gql } from "@apollo/client";

export default function GetAvatarsAndSubjects() {
  const USER_SUBJECTS = gql`
    {
      subjects {
        _id
        label
        icon_src
      }
    }
  `;

  const { loading, error, data } = useQuery(USER_SUBJECTS);

  return { loading, error, data };
}
