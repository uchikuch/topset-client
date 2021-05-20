import server from "../configs/Urls";

class UserStatsService {
  sendActiveSubjectToServer = async (user_id, exam_id, subject_id) => {
    // send active section data to server
    let activeSubject = {
      user_id,
      subject_id,
      exam_id,
    };
    const res = await fetch(`${server.url}/active_subject`, {
      method: "POST",
      body: JSON.stringify(activeSubject),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("res", data);
  };
}

const userStatsService = new UserStatsService();

export default userStatsService;
