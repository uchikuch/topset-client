import React from "react";

export default function GeneralStats({
  completed_lessons,
  completed_sections,
  completed_topics,
}) {
  return (
    <div>
      {completed_lessons && (
        <div className="__paddingSide20">
          <div className="container is-widescreen general_stats_box">
            <table className="__primaryText">
              <tbody>
                {/* lessons */}
                <tr>
                  <td>
                    <div className="__padding_sid20 __column_one">
                      <div className="__stat_icon">
                        <div className="__lessons_icon"></div>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        Total lessons completed
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ marginTop: 6 }}>
                      <div className="__stat_value">
                        <div className="__lesson_circle"></div>
                        <div>{completed_lessons.length}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="__align_right is-hidden-mobile">
                      <div className="__completion_div">
                        <img
                          src="https://topset.ng/wp-content/uploads/2021/03/star_icon.svg"
                          alt="gold star"
                        />
                        <div className="__completed_value">
                          {completed_lessons.length * 100}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* sections */}
                <tr>
                  <td>
                    <div className="__padding_sid20 __column_one">
                      <div className="__stat_icon">
                        <div className="__sections_icon"></div>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        Total sections completed
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ marginTop: 6 }}>
                      <div className="__stat_value">
                        <div className="__section_circle"></div>
                        <div>{completed_sections.length}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="__align_right is-hidden-mobile">
                      <div className="__completion_div">
                        <img
                          src="https://topset.ng/wp-content/uploads/2021/03/medal-icon.svg"
                          alt="gold star"
                          height="25px"
                          width="25px"
                        />
                        <div className="__completed_value">
                          {completed_sections.length * 10}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* Topics */}
                <tr>
                  <td>
                    <div className="__padding_sid20 __column_one">
                      <div className="__stat_icon">
                        <div className="__topics_icon"></div>
                      </div>
                      <div style={{ marginTop: 5 }}>Total topics completed</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ marginTop: 6 }}>
                      <div className="__stat_value">
                        <div className="__topic_circle"></div>
                        <div>{completed_topics.length}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="__align_right is-hidden-mobile">
                      <div className="__completion_div">
                        <img
                          src="https://topset.ng/wp-content/uploads/2021/03/trophy2.svg"
                          alt="gold star"
                          height="20px"
                          width="20px"
                        />
                        <div className="__completed_value">
                          {completed_topics.length}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
