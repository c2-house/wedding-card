import styles from './calendar.module.scss'

const Calendar = () => {
  return (
    <section className={styles.section}>
      <h2>DATE</h2>
      <p className={styles.date}>2023. 6. 10. (토) 오후 4시</p>
      <div className={styles.calendar}>
        <div className={styles.month}>6월</div>
        <table>
          <tbody>
            <tr className={styles.dayOfWeek}>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
            <tr>
              <td colSpan={4}>&nbsp;</td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
              <td>
                <span>6</span>
              </td>
              <td>
                <span>7</span>
              </td>
              <td>
                <span>8</span>
              </td>
              <td>
                <span>9</span>
              </td>
              <td className={styles.dday}>
                <span>10</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>11</span>
              </td>
              <td>
                <span>12</span>
              </td>
              <td>
                <span>13</span>
              </td>
              <td>
                <span>14</span>
              </td>
              <td>
                <span>15</span>
              </td>
              <td>
                <span>16</span>
              </td>
              <td>
                <span>17</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>18</span>
              </td>
              <td>
                <span>19</span>
              </td>
              <td>
                <span>20</span>
              </td>
              <td>
                <span>21</span>
              </td>
              <td>
                <span>22</span>
              </td>
              <td>
                <span>23</span>
              </td>
              <td>
                <span>24</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>25</span>
              </td>
              <td>
                <span>26</span>
              </td>
              <td>
                <span>27</span>
              </td>
              <td>
                <span>28</span>
              </td>
              <td>
                <span>29</span>
              </td>
              <td>
                <span>30</span>
              </td>
              <td colSpan={1}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Calendar
