import { postBlog } from '@utils/postList';
import Layout from '@components/layout/Layout';
import Link from "next/link"
import MDPreview from '@components/Common/MDPreview/index';

export async function getStaticPaths() {

    let paths: any = [];
    postBlog.forEach((post) => {
        paths.push({params:{ id : post.id.toString()}})
    })
    return {
        paths,
        fallback: 'blocking',
    }
  }
  
export async function getStaticProps({
params,
locale,
preview,
}: GetStaticPropsContext<{ id: string }>) {

const indexPost : any  = postBlog.findIndex(post => post.id.toString() === params.id.toString());

if (!postBlog[indexPost]) {
    throw new Error(`Post with slug '${params!.id}' not found`)
}

return {
    props: {
        post: postBlog[indexPost]
    },
    revalidate: 200,
}
}

const DetailBlog = ({
post
}) => {

return (
    <>
        <section className="pb-20">
            <div className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-6">
                            <span className="text-base md:text-lg">
                                <Link href="/blog-2" legacyBehavior>
                                    <a className="text-blueGray-200 hover:underline">
                                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">Bussiness</span>
                                    </a>
                                </Link>
                                <span className="text-blueGray-500 text-sm">24 Jan, 2021</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl mt-4 font-bold font-heading">{post.seo.title}</h2>
                        </div>
                        <div className="flex justify-center mb-8">
                            <img className="w-12 h-12 object-cover rounded-full" src="/assets/imgs/placeholders/avatar-8.png" alt="Mindwave" />
                            <div className="pl-4">
                                <p className="text-blueGray-500 mb-1">Alice Bradley</p>
                                <p className="text-xs text-blueGray-500 font-semibold">Co Founders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="max-w-2xl mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: post.html ? post.html : '' }} />
                </div>      
            </div>
        </section>
    </>
);
}

DetailBlog.Layout = Layout;

export default DetailBlog;