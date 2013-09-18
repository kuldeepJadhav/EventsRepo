import java.util.Map;

/**
 * 
 * @author jadhavk
 *
 */
public class JsonResponse {
	
/*
	private String status = null;
	private Object result = null;
 */
    private JsonResponseStatus status;
    /**
     * contain model/UI state
     */
    private Map<String,Object> data;
    /**
     * validation message
     */
    private Map<String,String> messages;
    /**
     * Required in case of error Error Stack Trace
     */
    private String error;
	
	/**
	 * 
	 * Type		Required Keys	Optional Keys	Description			
	 * success	status, data					All went well, and (usually) some data was returned.		
	 * fail		status, data					There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied
	 * error	status, message	code, data		An error occurred in processing the request, i.e. an exception was thrown
	 * 	
	 * Success: When an API call is successful, the JSend object is used as a simple envelope for the results, using the data key
	 * 
	 * Fail: When an API call is rejected due to invalid data or call conditions, 
	 * the JSend object's data key contains an object explaining what went wrong, 
	 * typically a hash of validation errors.
	 * 
	 * Error: When an API call fails due to an error on the server.
	 *
	 */
	public enum JsonResponseStatus{
		SUCCESS, FAIL, ERROR;
	}

	/* Getters and Setters */
	
	/**
	 * @return the status
	 */
	public JsonResponseStatus getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(JsonResponseStatus status) {
		this.status = status;
	}

	/**
	 * @return the error
	 */
	public String getError() {
		return error;
	}

	/**
	 * @param error the error to set
	 */
	public void setError(String error) {
		this.error = error;
	}

	/**
	 * @return the messages
	 */
	public Map<String, String> getMessages() {
		return messages;
	}

	/**
	 * @param messages the messages to set
	 */
	public void setMessages(Map<String, String> messages) {
		this.messages = messages;
	}

	/**
	 * @return the data
	 */
	public Map<String, Object> getData() {
		return data;
	}

	/**
	 * @param data the data to set
	 */
	public void setData(Map<String, Object> data) {
		this.data = data;
	}
	
}
