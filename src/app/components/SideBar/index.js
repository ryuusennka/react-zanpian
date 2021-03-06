import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import NewsYG from '@/components/News/yugao'
import Top from '@/components/Top'
import ArticleVod from '@/components/Vod'
import Ads from '@/components/Ads'

export default class SideBar extends PureComponent {
  static propTypes = {
    vodid: PropTypes.any
  }
  render() {
    const { vodid } = this.props
    return (
      <Fragment>
        {vodid ? <ArticleVod ids={vodid} /> : null}
        <div className={vodid ? 'mt20' : ''}>
          <Ads id={43} />
        </div>
        <div className="box mt20">
          <Top name="topListAll" title="30天热门动漫" sty={{ paddingBottom: 10 }} />
        </div>
        <div className="box mt20">
          <NewsYG name="newsAll" isCate={false} title="30天热门资讯" isType={true} sty={{ paddingBottom: 10 }} />
        </div>
      </Fragment>
    )
  }
}
