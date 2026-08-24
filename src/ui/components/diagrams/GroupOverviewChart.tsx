import { useNavigate } from "react-router-dom";
import { TOPIC_GROUP_LABEL, type Topic, type TopicGroup } from "../../../data/schema/models";

const GROUPS = Object.keys(TOPIC_GROUP_LABEL) as TopicGroup[];

/** Bieu do cot ngang: so chu de moi nhom + ti le da co noi dung T1. */
export function GroupOverviewChart({ topics, topicIdsWithContent }: { topics: Topic[]; topicIdsWithContent: Set<string> }) {
  const navigate = useNavigate();
  const width = 420;
  const rowH = 30;
  const gap = 6;
  const labelW = 34;
  const barMaxW = width - labelW - 60;
  const height = GROUPS.length * (rowH + gap);

  const counts = GROUPS.map((g) => {
    const groupTopics = topics.filter((t) => t.group === g);
    const withContent = groupTopics.filter((t) => topicIdsWithContent.has(t.id)).length;
    return { group: g, total: groupTopics.length, withContent };
  });
  const maxTotal = Math.max(...counts.map((c) => c.total));

  return (
    <figure className="diagram-figure" style={{ alignItems: "stretch" }}>
      <figcaption className="diagram-title">Tổng quan 9 nhóm chủ đề (đậm = đã có nội dung T1)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Biểu đồ số chủ đề theo nhóm">
        {counts.map((c, i) => {
          const y = i * (rowH + gap);
          const barW = (c.total / maxTotal) * barMaxW;
          const filledW = (c.withContent / maxTotal) * barMaxW;
          return (
            <g
              key={c.group}
              onClick={() => navigate(`/chu-de?nhom=${c.group}`)}
              style={{ cursor: "pointer" }}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/chu-de?nhom=${c.group}`)}
            >
              <text x={0} y={y + rowH / 2} dominantBaseline="middle" fontSize={11} fontWeight={700} fill="var(--text)">
                {c.group}
              </text>
              <rect x={labelW} y={y + 4} width={barW} height={rowH - 8} rx={4} fill="var(--info-bg)" />
              <rect x={labelW} y={y + 4} width={filledW} height={rowH - 8} rx={4} fill="var(--accent)" />
              <text x={labelW + barMaxW + 8} y={y + rowH / 2} dominantBaseline="middle" fontSize={10} fill="var(--text-muted)">
                {c.withContent}/{c.total}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
