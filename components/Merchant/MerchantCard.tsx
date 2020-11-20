import { FC } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  border: 1px solid #c9e1e9;

  @media (min-width: 1024px) {
    display: flex;
  }
`

const Image = styled.div<any>`
  width: 100%;
  min-height: 14rem;
  background-color: #ececec;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: 1024px) {
    & {
      max-width: 20rem;
    }
  }
`

const Detail = styled.div`
  flex: 1;
  padding: 1rem;
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`

const ShopName = styled.h1`
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-size: 20px;
  font-weight: 600;
`

const Tag: any = styled.span`
  background-color: ${(props: any) => (props.active ? '#1bc300' : '#a1a1a1')};
  height: auto;
  margin-left: 1rem;
  padding: 0 7px;
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-weight: 600;
  font-size: 12px;
  color: white;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #999999;
  font-size: 14px;
`

const Subtitle = styled.span``

const Spliter = styled.span`
  margin: 0 0.75rem;
`

const PriceSign = styled.span`
  color: #222222;
`

const Divider = styled.div`
  width: 65%;
  height: 1px;
  background-color: #eeeeee;
  margin: 18px 0;
`

const HighlightText = styled.p`
  color: #999999;
  font-size: 14px;
  margin-bottom: 0.5rem;
`

const Recommended = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  color: #999999;
  margin-bottom: 0.5rem;
`

const RecommendedTitle = styled.span`
  color: #444444;
  font-family: 'IBM Plex Sans Thai SemiBold';
  font-weight: 500;
  margin-right: 0.5rem;
`

const RecommendedItem = styled.span`
  margin-right: 0.25rem;
`

const Facilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`

const FacilityImage = styled.img`
  padding: 5px;
  border-radius: 20px;
  height: 1.1rem;
  width: 1.1rem;
  border: 1px solid #6cbf5f;
`

const StatusTag: FC<any> = ({ isOpen }) => {
  const text = isOpen === 'Y' ? 'เปิดอยู่' : 'ปิดแล้ว'
  return <Tag active={isOpen === 'Y'}>{text}</Tag>
}

const PriceLevel: FC<any> = ({ priceLevel }) => {
  const levels = [1, 2, 3, 4]
  return (
    <>
      <Spliter>|</Spliter>
      {levels.map((level) => {
        return level <= priceLevel ? <PriceSign>฿</PriceSign> : <span>฿</span>
      })}
    </>
  )
}

const MerchantCard: FC<any> = ({ merchant }) => {
  const {
    coverImageId,
    shopNameTH,
    subcategoryName,
    addressProvinceName,
    addressDistrictName,
    isOpen,
    priceLevel,
    highlightText,
    recommendedItems,
    facilities
  } = merchant
  return (
    <Card>
      <Image src={coverImageId} />

      <Detail>
        <FlexRow>
          <ShopName>{shopNameTH}</ShopName>
          {!isOpen || isOpen !== 'N/A' ? <StatusTag {...{ isOpen }} /> : null}
        </FlexRow>

        <FlexWrap>
          <Subtitle>{subcategoryName}</Subtitle>

          {priceLevel ? <PriceLevel {...{ priceLevel }}></PriceLevel> : null}

          <Spliter>|</Spliter>
          <Subtitle>{`${addressDistrictName} ${addressProvinceName}`}</Subtitle>
        </FlexWrap>

        <Divider />

        {highlightText ? (
          <HighlightText dangerouslySetInnerHTML={{ __html: highlightText }} />
        ) : null}

        <Recommended>
          <RecommendedTitle>เมนูแนะนำ: </RecommendedTitle>
          {recommendedItems
            ? recommendedItems.map((item, index) => (
                <RecommendedItem>{`${item}${
                  index !== recommendedItems.length - 1 ? ',' : ''
                }`}</RecommendedItem>
              ))
            : null}
        </Recommended>

        <Facilities>
            <FacilityImage src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/facilities/carpark.png`} />
        </Facilities>
      </Detail>
    </Card>
  )
}

export default MerchantCard
