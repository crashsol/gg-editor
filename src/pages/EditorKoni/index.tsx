import { Col, Row } from 'antd';
import GGEditor, { Koni } from 'gg-editor';
import React from 'react';
import EditorMinimap from './components/EditorMinimap';
import { KoniContextMenu } from './components/EditorContextMenu';
import { KoniDetailPanel } from './components/EditorDetailPanel';
import { KoniItemPanel } from './components/EditorItemPanel';
import { KoniToolbar } from './components/EditorToolbar';
import styles from './index.less';
import CustomNode from './components/CustomerEditor/CustomerNode';
import CustomEdge from './components/CustomerEditor/CustomerEdge';

GGEditor.setTrackable(false);
//添加布局悲剧
const grid = {
  cell: 20,
  type: 'line',
  line: {
    color: '#f7f7f7',
    fill: '#f7f7f7',
    stroke: '#f7f7f7',
    lineWidth: 0.1
  }
}
export default () => (
  <>
    <GGEditor className={styles.editor}>
      <Row className={styles.editorHd}>
        <Col span={24}>
          <KoniToolbar />
        </Col>
      </Row>
      <Row className={styles.editorBd}>
        <Col span={2} className={styles.editorSidebar}>
          <KoniItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Koni grid={grid}
            data={data}
            className={styles.koni} />

        </Col>
        <Col span={6} className={styles.editorSidebar}>
          <KoniDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <KoniContextMenu />
      <CustomNode />
      <CustomEdge />
    </GGEditor>
  </>
);
