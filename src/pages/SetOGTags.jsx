import { useEffect } from 'react';

const SetOGTags = () => {
  useEffect(() => {
    // og 태그 정보 배열
    const ogTags = [
      { property: 'og:title', content: '감정 일기장' },
      {
        property: 'og:image',
        content: '/thumbnail.png',
      },
      {
        property: 'og:description',
        content: '오늘의 감정이 어떤지 알려주세요',
      },
    ];

    /// head 태그에 og 메타 태그 추가
    const titleTag = document.querySelector('title');
    ogTags.forEach((tag) => {
      const metaTag = document.createElement('meta');
      metaTag.setAttribute('property', tag.property);
      metaTag.setAttribute('content', tag.content);

      // title 태그 바로 다음에 삽입
      if (titleTag && titleTag.parentNode) {
        titleTag.parentNode.insertBefore(
          metaTag,
          titleTag.nextSibling,
        );
      }
    });

    // Cleanup 함수 (컴포넌트가 언마운트될 때 메타 태그를 제거)
    return () => {
      ogTags.forEach((tag) => {
        const metaTag = document.querySelector(
          `meta[property="${tag.property}"]`,
        );
        if (metaTag) {
          document.head.removeChild(metaTag);
        }
      });
    };
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default SetOGTags;
