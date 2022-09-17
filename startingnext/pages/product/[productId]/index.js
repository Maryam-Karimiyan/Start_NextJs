import { useRouter } from 'next/router'
import Link from 'next/link';
export default function ProductDetails() {
    const router = useRouter();
    const productId=router.query.productId;
    return (
        <>
        <Link href='/product'><a>Products</a></Link>
        <h1>
        ProductDetails about {productId}
        </h1>
        </>
            
    )
}
