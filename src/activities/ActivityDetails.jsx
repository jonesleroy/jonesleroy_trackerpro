import { useParams } from "react-router";
import useQuery from "../api/useQuery";

export default function ActivityDetails() {
  const { id } = useParams();
  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, "activities");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!activity) return <div>No activity found.</div>;

  return (
    <div>
      <h2>Activity Details</h2>
      <p>
        <strong>ID:</strong> {activity.id}
      </p>
      <p>
        <strong>Name:</strong> {activity.name}
      </p>
      {activity.description && (
        <p>
          <strong>Description:</strong> {activity.description}
        </p>
      )}
      {/* Add more fields as needed */}
    </div>
  );
}
