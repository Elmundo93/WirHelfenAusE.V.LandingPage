// components/Communication/GuidelineSection.tsx
type GuidelineSectionProps = {
    title: string
    icon?: string
    color?: string
    items: { emoji: string; content: string }[]
  }
  
  export default function GuidelineSection({ title, icon, color = "text-gray-800", items }: GuidelineSectionProps) {
    return (
      <div className="mt-12">
        <h2 className={`text-2xl font-semibold mb-4 ${color}`}>
          {icon} {title}
        </h2>
        <ul className="space-y-4 text-gray-700">
          {items.map((item, idx) => (
            <li key={idx}>
              {item.emoji} <span dangerouslySetInnerHTML={{ __html: item.content }} />
            </li>
          ))}
        </ul>
      </div>
    )
  }