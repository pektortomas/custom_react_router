import BackButton from "./buttons/BackButton";
import { useParams } from "../hooks/useParams";

export default function AttackDetail() {
  const { id } = useParams();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      Attack id: {id}
      <BackButton />
    </div>
  );
}
