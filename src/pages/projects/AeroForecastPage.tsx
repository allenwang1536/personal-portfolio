import React from "react";
import useScrollToSection from "../../hooks/useScrollToSection";
import { Section } from "../../types";
import Outline from "../../components/Outline";

export default function AeroForecastPage() {
  const sections: Section[] = [
    { id: "universal-overview", title: "Overview", level: 2 },
    { id: "project-methodology", title: "Project Methodology", level: 2 },
    { id: "conclusion", title: "A Few Thoughts..", level: 2 },
  ];
  const scrollToSection = useScrollToSection();
  return (
    <div className="with-outline">
       <Outline outline={sections} handleClick={scrollToSection} />
      <div className="project">
      <div className="project-header" id="rapt-header">
        <h1 className="project-name">AeroForecast</h1>
        <p className="project-subheading">AI-Powered Weather Forecasting</p>
        <p className="project-subheading">Pytorch, Machine Learning | Spring 2024</p>
        <p className="project-subheading project-github">
          <a href="https://github.com/allenwang1536/aero-forecast.git" target="_blank" rel="noreferrer">
            <u>Github</u>
          </a>
        
        </p>
      </div>
      <div className="project-header" id="universal-overview">
        <h2 className="project-heading">Overview</h2>
      </div>
      <div className="project-text">
        <div className="project-section">
          <p className="project-sub-subheading">Introduction</p>
          <p>
            Weather forecasts are notoriously unpredictable. Within just a few hours, a forecast can shift from a 100%
            chance of rain to clear, sunny skies. Traditional methods, which rely on physics and mathematical models,
            often struggle with the complex interplay of factors affecting the weather. To address this, my team and I
            explored a deep learning-based approach, aiming to better capture these intricate relationships through
            models that consider both spatial and temporal dynamics of weather data.
          </p>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Proposed Solution</p>
          <p>Our project tested two different deep learning strategies to enhance weather prediction accuracy:</p>
          <ol>
            <li className="text-li">
              <b>Sequential processing:</b> First capture spatial relationships using a Convolutional Neural Network
              (CNN), then analyze temporal patterns through either Long Short-Term Memory (LSTM) networks or
              Transformers.
            </li>
            <li className="text-li">
              <b>Simultaneous processing:</b> Use Convolutional LSTM (ConvLSTM) to integrate spatial and temporal data
              in one step.
            </li>
          </ol>
          <p>
            These methods were chosen to evaluate whether simultaneous or sequential processing is more effective in the
            context of weather forecasting. Read on to discover our findings!
          </p>
        </div>
      </div>
      <div className="project-header" id="project-methodology">
        <h2 className="project-heading">Project Methodology</h2>
      </div>
      <div className="project-text">
        <div className="project-section">
          <p className="project-sub-subheading">Data Preprocessing</p>
          <p>
            We utilized the WeatherBench2 dataset, derived from ECMWF ERA5 data, which features key weather variables
            like wind, temperature, and pressure across a 64 x 32 global grid. For our models, we reshaped each day’s
            data into [features, num_grids_y, num_grids_x] and normalized it to effectively capture spatiotemporal
            sequences. After selecting relevant variables, as detailed previously, we processed the data into sequences
            that represent weather data up to a specific timestamp, with forecasts aimed one day ahead. The final data
            format for our models was [batch_size, sequence_len, features, num_grids_y, num_grids_x].
          </p>
          <div className="project-pics">
            <img src="../../images/aero-forecast/preprocessed-data.png" className="project-pic-half-large" />
            <img
              src="../../images/aero-forecast/sequence.png"
              className="project-pic-half-small"
              style={{ width: 500, objectFit: "contain" }}
            />
          </div>
          <p>
            <i>Challenge:</i> The complexity of managing 5D data required extensive reference to numpy and TensorFlow
            documentation, enhancing my understanding of data manipulation within these libraries.
          </p>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Model Architectures</p>
          <p>Sequential Processing (CNN-LSTM, CNN-Transformer)</p>
          <ul>
            <li className="text-li">
              For these models, our input to the CNN consisted of [batch_size, features, num_grids_y, num_grids_x],
              treating the 12 weather features as CNN channels and num_grids_y and num_grids_x as the dimensions of the
              feature maps. After CNN processing, we flattened the outputs containing spatial patterns and passed them
              sequentially to either an LSTM or Transformer model. This step was crucial to capture temporal dynamics
              effectively, aiming to forecast the next day’s weather accurately.
            </li>
            <li className="text-li">
              <i>Challenges:</i> Balancing model complexity with generalization was a hurdle. Initially, our models
              overfitted, prompting us to scale down the CNN layers’ sizes and tweak the regularization parameters.
            </li>
          </ul>
          <div className="project-pics">
            <img src="../../images/aero-forecast/lstm-transformer.png" className="project-pic-medium" />
          </div>
          <p>Simultaneous Processing (Convolutional LSTM)</p>
          <ul>
            <li className="text-li">
              The ConvLSTM architecture integrates spatial and temporal processing in one unified framework. Each
              ConvLSTM cell processes inputs as 3D vectors (channels, height, width), utilizing convolutional operations
              to update its gates and states. This setup enables the model to simultaneously learn spatial details and
              temporal sequences directly from data structured as [batch_size, sequence_len, channels, height, width].
            </li>
            <li className="text-li">
              <i>Challenge:</i> Integrating ConvLSTM was a strategic pivot made during the project after recognizing the
              limitations of sequential processing for complex spatiotemporal data like weather.
            </li>
          </ul>
          <div className="project-pics">
            <img src="../../images/aero-forecast/conv-lstm.png" className="project-pic-medium" />
          </div>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Results</p>
          <p>
            After training our three models—CNN-LSTM, CNN-Transformer, and ConvLSTM—for 10 epochs, we observed their
            training loss in the graph below.
          </p>
          <div className="project-pics">
            <img src="../../images/aero-forecast/training-curve.png" className="project-pic-half-large" />
          </div>
          <p>
            To evaluate our models, we calculated testing loss and accuracy from their predictions, normalized using the
            dataset’s mean and standard deviation. We employed the Mean Squared Error (MSE) loss function to measure the
            squared deviations between predicted and actual values. For accuracy, we measured how closely predictions
            matched actual values. Specifically, accuracy was assessed by the proportion of samples where over 95% of
            predicted values for each feature were within 0.1 standard deviations of true values.
          </p>
          <p />
          <div className="project-pics">
            <img src="../../images/aero-forecast/testing-loss.png" className="project-pic-half-large" />
            <img src="../../images/aero-forecast/accuracy.png" className="project-pic-half-large" />
          </div>
          <p>
            The analysis revealed that the ConvLSTM model outperformed the CNN-LSTM and CNN-Transformer in forecasting
            accuracy. ConvLSTM demonstrated superior capability in learning spatiotemporal patterns, evidenced by lower
            loss across ten epochs due to its effective integration of convolutional spatial analysis and LSTM temporal
            modeling. These results confirm ConvLSTM’s effectiveness in handling complex weather data.
          </p>
        </div>
      </div>
      <div className="project-header" id="rapt-header">
        <h2 className="project-heading">A Few Thoughts...</h2>
      </div>
      <div className="project-text" id="conclusion">
        <ul>
          <li className="text-li">
            Building my first machine learning models from scratch was both rewarding and surprisingly fun. Initially,
            the whole process seemed daunting, but it quickly became more manageable and enjoyable as I got into it.
          </li>
          <li className="text-li">
            I realized that I had underestimated the complexity of data preparation. While I had expected that designing
            the model architectures would be the toughest part, it turned out that manipulating the data accurately was
            even more time-consuming. This experience highlighted the importance of getting the data setup just right
            for successful model training.
          </li>
          <li className="text-li">
            Another key learning was the significant impact that hyperparameter tuning can have on model performance. By
            fine-tuning these parameters, we managed to drastically reduce our model losses—from around 1.3 to just
            0.002. This was a major breakthrough in improving our models' accuracy and efficiency.
          </li>
          <li className="text-li">
            Overall, this project was an excellent experience into building and deploying machine learning models. It
            has really opened up the field for me and I'm excited about diving into more projects like this in the
            future.
          </li>
        </ul>
      </div>
    </div>

    </div>
    
  );
}
