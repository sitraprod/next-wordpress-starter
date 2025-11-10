import Link from 'next/link';
import { formatDate } from 'lib/datetime';
import { FaUser } from 'react-icons/fa';

import styles from './PostCard.module.scss';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false, featuredImage } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  // --- بداية التعديل الذكي للصور ---
  // هذا السطر يتحقق من مكان الرابط سواء كان مباشراً أو داخل node
  const imageUrl = featuredImage?.sourceUrl || featuredImage?.node?.sourceUrl;
  const imageAlt = featuredImage?.altText || featuredImage?.node?.altText || title;
  // --- نهاية التعديل ---

  return (
    <div className={postCardStyle}>
      <Link href={`/posts/${slug}`} className={styles.postCardInner}>
        {imageUrl && (
          <div className={styles.postCardImage}>
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
            />
          </div>
        )}
        <div className={styles.postCardContent}>
          {isSticky && <h3 className={styles.postCardTitle}>{title}</h3>}
          {!isSticky && <h3 className={styles.postCardTitle} dangerouslySetInnerHTML={{ __html: title }} />}
          <div className={styles.postCardMetadata}>
            {metadata.author?.node?.name && (
              <span className={styles.postCardMetadataAuthor}>
                <FaUser /> <span>كتبه: {metadata.author.node.name}</span>
              </span>
            )}
            {metadata.date && (
              <span className={styles.postCardMetadataDate}>
                <time pubdate="pubdate" dateTime={metadata.date}>
                  {formatDate(metadata.date)}
                </time>
              </span>
            )}
            {metadata.categories?.edges?.length > 0 && (
              <span className={styles.postCardMetadataCategories}>
                {metadata.categories.edges.map((category) => (
                  <span key={category.node.id}>{category.node.name}</span>
                ))}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;