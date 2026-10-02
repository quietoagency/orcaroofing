import { RichText, type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import type { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import type { Post } from '@/payload-types'
import KeyTakeaways from '@/components/ui/KeyTakeaways'
import { getNodeText, slugifyHeading } from '@/lib/getHeadings'

type KeyTakeawaysFields = {
  blockType: 'keyTakeaways'
  title?: string | null
  items: { id?: string | null; text: string }[]
}

type Nodes = DefaultNodeTypes | SerializedBlockNode<KeyTakeawaysFields>

const jsxConverters: JSXConvertersFunction<Nodes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    keyTakeaways: ({ node }) => <KeyTakeaways {...node.fields} />,
  },
  heading: ({ node, nodesToJSX }) => {
    const Tag = node.tag
    const id = node.tag === 'h2' ? slugifyHeading(getNodeText(node)) : undefined
    return <Tag id={id || undefined} className="scroll-mt-24">{nodesToJSX({ nodes: node.children })}</Tag>
  },
  table: ({ node, nodesToJSX }) => (
    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>{nodesToJSX({ nodes: node.children })}</tbody>
      </table>
    </div>
  ),
  tablerow: ({ node, nodesToJSX }) => (
    <tr className="border-b border-sand even:bg-[#f6f2ec]">{nodesToJSX({ nodes: node.children })}</tr>
  ),
  tablecell: ({ node, nodesToJSX }) => {
    const Tag = node.headerState > 0 ? 'th' : 'td'
    return (
      <Tag
        colSpan={node.colSpan && node.colSpan > 1 ? node.colSpan : undefined}
        rowSpan={node.rowSpan && node.rowSpan > 1 ? node.rowSpan : undefined}
        className={
          Tag === 'th'
            ? 'bg-charcoal px-4 py-3 text-xs font-semibold text-white'
            : 'px-4 py-3.5 text-[13px] text-slate first:font-semibold first:text-black'
        }
      >
        {nodesToJSX({ nodes: node.children })}
      </Tag>
    )
  },
})

export default function BlogRichText({ data }: { data: Post['content'] }) {
  return <RichText data={data} converters={jsxConverters} />
}
